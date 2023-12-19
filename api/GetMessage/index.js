module.exports = async function (context, req) {
  const date = "2023-12-19T18:09:34.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

