module.exports = async function (context, req) {
  const date = "2024-08-27T16:13:06.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

