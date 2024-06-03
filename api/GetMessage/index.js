module.exports = async function (context, req) {
  const date = "2024-06-03T07:09:54.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

