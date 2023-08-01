module.exports = async function (context, req) {
  const date = "2023-08-01T17:08:04.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

