module.exports = async function (context, req) {
  const date = "2023-10-29T00:43:35.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

