module.exports = async function (context, req) {
  const date = "2025-12-06T17:11:15.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

