module.exports = async function (context, req) {
  const date = "2024-08-26T07:10:51.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

