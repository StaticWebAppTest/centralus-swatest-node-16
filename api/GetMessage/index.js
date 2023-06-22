module.exports = async function (context, req) {
  const date = "2023-06-22T03:09:34.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

