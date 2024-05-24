module.exports = async function (context, req) {
  const date = "2024-05-24T16:11:35.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

