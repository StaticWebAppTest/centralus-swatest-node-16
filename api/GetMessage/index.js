module.exports = async function (context, req) {
  const date = "2024-09-08T02:15:29.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

