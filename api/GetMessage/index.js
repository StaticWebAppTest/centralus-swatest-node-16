module.exports = async function (context, req) {
  const date = "2025-05-07T13:27:50.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

