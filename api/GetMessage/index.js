module.exports = async function (context, req) {
  const date = "2024-07-25T21:10:51.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

