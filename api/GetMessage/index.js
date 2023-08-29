module.exports = async function (context, req) {
  const date = "2023-08-29T21:07:41.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

