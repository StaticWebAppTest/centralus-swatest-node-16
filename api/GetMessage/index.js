module.exports = async function (context, req) {
  const date = "2023-04-08T09:07:39.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

