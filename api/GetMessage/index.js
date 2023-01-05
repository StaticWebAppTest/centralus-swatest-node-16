module.exports = async function (context, req) {
  const date = "2023-01-05T00:51:46.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

