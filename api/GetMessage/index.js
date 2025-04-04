module.exports = async function (context, req) {
  const date = "2025-04-04T14:12:09.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

