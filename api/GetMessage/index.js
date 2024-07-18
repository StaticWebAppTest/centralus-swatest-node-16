module.exports = async function (context, req) {
  const date = "2024-07-18T13:14:24.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

