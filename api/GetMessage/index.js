module.exports = async function (context, req) {
  const date = "2024-08-04T23:11:07.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

