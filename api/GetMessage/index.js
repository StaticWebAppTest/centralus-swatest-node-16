module.exports = async function (context, req) {
  const date = "2024-06-03T03:11:52.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

