module.exports = async function (context, req) {
  const date = "2025-01-07T09:12:57.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

