module.exports = async function (context, req) {
  const date = "2023-08-12T21:06:35.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

