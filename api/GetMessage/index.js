module.exports = async function (context, req) {
  const date = "2024-08-29T14:11:46.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

