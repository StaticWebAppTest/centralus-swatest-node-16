module.exports = async function (context, req) {
  const date = "2025-04-27T13:19:24.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

