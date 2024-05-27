module.exports = async function (context, req) {
  const date = "2024-05-27T03:12:01.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

