module.exports = async function (context, req) {
  const date = "2024-05-07T05:11:04.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

