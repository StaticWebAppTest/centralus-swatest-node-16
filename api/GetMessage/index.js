module.exports = async function (context, req) {
  const date = "2023-09-08T01:42:12.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

