module.exports = async function (context, req) {
  const date = "2023-06-06T02:25:21.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

