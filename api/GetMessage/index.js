module.exports = async function (context, req) {
  const date = "2025-05-27T04:19:16.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

