module.exports = async function (context, req) {
  const date = "2023-05-05T10:09:24.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

