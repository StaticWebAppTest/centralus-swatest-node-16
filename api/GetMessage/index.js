module.exports = async function (context, req) {
  const date = "2022-03-23T03:22:43.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

