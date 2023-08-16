module.exports = async function (context, req) {
  const date = "2023-08-16T00:38:42.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

