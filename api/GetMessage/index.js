module.exports = async function (context, req) {
  const date = "2023-08-29T23:06:59.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

