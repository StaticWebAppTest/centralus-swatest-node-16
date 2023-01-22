module.exports = async function (context, req) {
  const date = "2023-01-22T19:07:06.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

