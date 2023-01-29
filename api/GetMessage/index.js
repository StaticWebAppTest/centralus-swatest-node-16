module.exports = async function (context, req) {
  const date = "2023-01-29T03:11:25.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

