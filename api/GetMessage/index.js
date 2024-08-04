module.exports = async function (context, req) {
  const date = "2024-08-04T21:10:06.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

