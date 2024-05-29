module.exports = async function (context, req) {
  const date = "2024-05-29T13:11:43.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

