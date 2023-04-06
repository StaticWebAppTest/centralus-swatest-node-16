module.exports = async function (context, req) {
  const date = "2023-04-06T02:30:46.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

