module.exports = async function (context, req) {
  const date = "2024-08-25T03:11:32.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

