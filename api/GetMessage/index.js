module.exports = async function (context, req) {
  const date = "2024-06-08T10:10:23.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

