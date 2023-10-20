module.exports = async function (context, req) {
  const date = "2023-10-20T02:16:28.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

