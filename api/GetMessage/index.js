module.exports = async function (context, req) {
  const date = "2023-09-19T02:16:46.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

