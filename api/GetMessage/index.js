module.exports = async function (context, req) {
  const date = "2024-08-29T21:10:25.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

