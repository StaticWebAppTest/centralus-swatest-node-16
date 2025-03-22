module.exports = async function (context, req) {
  const date = "2025-03-22T19:09:30.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

