module.exports = async function (context, req) {
  const date = "2024-04-08T05:09:07.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

