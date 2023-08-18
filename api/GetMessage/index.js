module.exports = async function (context, req) {
  const date = "2023-08-18T00:38:31.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

