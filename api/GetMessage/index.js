module.exports = async function (context, req) {
  const date = "2023-06-25T01:05:42.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

