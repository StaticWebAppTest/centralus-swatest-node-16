module.exports = async function (context, req) {
  const date = "2025-05-06T15:17:10.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

