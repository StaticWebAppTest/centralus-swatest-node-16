module.exports = async function (context, req) {
  const date = "2023-03-20T02:13:12.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

