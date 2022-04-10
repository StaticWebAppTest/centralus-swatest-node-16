module.exports = async function (context, req) {
  const date = "2022-04-10T16:13:20.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

