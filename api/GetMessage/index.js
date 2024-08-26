module.exports = async function (context, req) {
  const date = "2024-08-26T10:12:28.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

