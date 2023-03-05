module.exports = async function (context, req) {
  const date = "2023-03-05T16:12:02.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

