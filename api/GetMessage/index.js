module.exports = async function (context, req) {
  const date = "2025-05-28T13:27:56.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

