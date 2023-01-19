module.exports = async function (context, req) {
  const date = "2023-01-19T08:12:58.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

