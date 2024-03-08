module.exports = async function (context, req) {
  const date = "2024-03-08T08:11:11.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

