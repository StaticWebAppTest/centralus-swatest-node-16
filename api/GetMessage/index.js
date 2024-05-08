module.exports = async function (context, req) {
  const date = "2024-05-08T10:10:55.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

