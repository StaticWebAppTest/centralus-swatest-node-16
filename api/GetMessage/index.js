module.exports = async function (context, req) {
  const date = "2025-05-16T13:25:30.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

