module.exports = async function (context, req) {
  const date = "2025-11-27T07:15:35.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

