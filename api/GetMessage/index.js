module.exports = async function (context, req) {
  const date = "2023-04-15T17:07:24.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

