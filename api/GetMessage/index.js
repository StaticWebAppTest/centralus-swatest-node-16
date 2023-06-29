module.exports = async function (context, req) {
  const date = "2023-06-29T03:18:39.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

