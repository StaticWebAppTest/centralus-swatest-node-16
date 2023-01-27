module.exports = async function (context, req) {
  const date = "2023-01-27T11:08:24.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

