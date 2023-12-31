module.exports = async function (context, req) {
  const date = "2023-12-31T02:23:29.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

