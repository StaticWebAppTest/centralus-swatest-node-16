module.exports = async function (context, req) {
  const date = "2023-07-29T00:46:31.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

