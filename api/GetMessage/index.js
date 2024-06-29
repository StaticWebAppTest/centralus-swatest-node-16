module.exports = async function (context, req) {
  const date = "2024-06-29T14:09:11.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

