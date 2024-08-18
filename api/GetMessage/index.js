module.exports = async function (context, req) {
  const date = "2024-08-18T03:11:24.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

