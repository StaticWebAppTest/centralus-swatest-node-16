module.exports = async function (context, req) {
  const date = "2024-12-04T19:12:36.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

