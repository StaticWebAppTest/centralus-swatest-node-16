module.exports = async function (context, req) {
  const date = "2022-09-12T20:13:20.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

