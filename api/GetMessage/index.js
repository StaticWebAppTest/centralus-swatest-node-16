module.exports = async function (context, req) {
  const date = "2023-10-18T16:11:17.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

