module.exports = async function (context, req) {
  const date = "2025-11-27T14:13:51.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

