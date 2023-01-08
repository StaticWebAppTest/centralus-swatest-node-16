module.exports = async function (context, req) {
  const date = "2023-01-08T03:10:29.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

