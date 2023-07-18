module.exports = async function (context, req) {
  const date = "2023-07-18T03:19:49.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

