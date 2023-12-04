module.exports = async function (context, req) {
  const date = "2023-12-04T22:08:51.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

