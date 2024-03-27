module.exports = async function (context, req) {
  const date = "2024-03-27T19:07:29.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

