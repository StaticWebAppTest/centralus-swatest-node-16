module.exports = async function (context, req) {
  const date = "2023-05-05T13:10:49.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

