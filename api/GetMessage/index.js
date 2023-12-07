module.exports = async function (context, req) {
  const date = "2023-12-07T10:10:26.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

