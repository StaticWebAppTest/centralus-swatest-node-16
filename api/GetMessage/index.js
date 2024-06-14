module.exports = async function (context, req) {
  const date = "2024-06-14T02:29:34.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

