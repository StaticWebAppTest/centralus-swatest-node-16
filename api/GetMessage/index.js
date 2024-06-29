module.exports = async function (context, req) {
  const date = "2024-06-29T00:46:54.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

