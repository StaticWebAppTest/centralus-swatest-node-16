module.exports = async function (context, req) {
  const date = "2024-11-25T19:09:49.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

