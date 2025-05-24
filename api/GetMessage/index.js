module.exports = async function (context, req) {
  const date = "2025-05-24T05:12:34.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

