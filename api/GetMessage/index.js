module.exports = async function (context, req) {
  const date = "2023-06-29T00:59:14.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

