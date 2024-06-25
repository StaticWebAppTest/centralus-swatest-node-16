module.exports = async function (context, req) {
  const date = "2024-06-25T02:29:48.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

