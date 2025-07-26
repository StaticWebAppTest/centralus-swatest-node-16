module.exports = async function (context, req) {
  const date = "2025-07-26T15:13:25.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

