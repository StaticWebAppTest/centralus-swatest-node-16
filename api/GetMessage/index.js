module.exports = async function (context, req) {
  const date = "2023-03-06T12:19:55.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

