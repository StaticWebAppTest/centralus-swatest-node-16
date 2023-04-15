module.exports = async function (context, req) {
  const date = "2023-04-15T00:50:32.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

