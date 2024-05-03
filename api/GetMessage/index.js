module.exports = async function (context, req) {
  const date = "2024-05-03T06:12:51.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

