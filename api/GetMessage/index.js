module.exports = async function (context, req) {
  const date = "2024-02-22T21:07:51.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

