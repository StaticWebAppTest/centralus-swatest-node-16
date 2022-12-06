module.exports = async function (context, req) {
  const date = "2022-12-06T00:50:03.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

