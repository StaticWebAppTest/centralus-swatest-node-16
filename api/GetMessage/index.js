module.exports = async function (context, req) {
  const date = "2024-12-25T02:12:54.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

