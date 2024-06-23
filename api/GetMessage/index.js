module.exports = async function (context, req) {
  const date = "2024-06-23T13:09:48.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

