module.exports = async function (context, req) {
  const date = "2023-11-26T17:07:25.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

