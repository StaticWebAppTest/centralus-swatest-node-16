module.exports = async function (context, req) {
  const date = "2024-08-22T18:13:59.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

