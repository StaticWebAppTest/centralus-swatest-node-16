module.exports = async function (context, req) {
  const date = "2023-06-29T21:08:24.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

