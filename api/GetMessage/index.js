module.exports = async function (context, req) {
  const date = "2024-06-02T17:08:28.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

