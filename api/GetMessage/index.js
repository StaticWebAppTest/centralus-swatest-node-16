module.exports = async function (context, req) {
  const date = "2024-02-07T17:08:42.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

