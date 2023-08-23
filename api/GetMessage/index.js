module.exports = async function (context, req) {
  const date = "2023-08-23T03:09:00.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

