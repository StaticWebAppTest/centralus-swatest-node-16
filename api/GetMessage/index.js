module.exports = async function (context, req) {
  const date = "2024-08-05T07:10:58.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

