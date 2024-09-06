module.exports = async function (context, req) {
  const date = "2024-09-06T22:10:20.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

