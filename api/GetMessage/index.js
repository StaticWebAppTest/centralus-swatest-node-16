module.exports = async function (context, req) {
  const date = "2025-05-17T13:20:23.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

