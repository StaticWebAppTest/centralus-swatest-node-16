module.exports = async function (context, req) {
  const date = "2023-10-05T01:47:35.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

