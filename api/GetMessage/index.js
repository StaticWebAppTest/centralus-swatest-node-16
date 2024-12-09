module.exports = async function (context, req) {
  const date = "2024-12-09T13:24:05.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

