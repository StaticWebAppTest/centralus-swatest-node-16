module.exports = async function (context, req) {
  const date = "2023-01-15T13:12:43.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

