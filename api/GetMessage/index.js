module.exports = async function (context, req) {
  const date = "2023-09-20T10:09:54.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

