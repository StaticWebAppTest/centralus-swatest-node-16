module.exports = async function (context, req) {
  const date = "2025-04-05T17:09:51.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

