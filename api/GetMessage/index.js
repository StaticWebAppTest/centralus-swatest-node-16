module.exports = async function (context, req) {
  const date = "2023-12-15T03:10:20.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

