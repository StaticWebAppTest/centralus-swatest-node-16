module.exports = async function (context, req) {
  const date = "2025-01-06T22:11:04.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

