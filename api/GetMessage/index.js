module.exports = async function (context, req) {
  const date = "2024-06-07T10:10:53.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

