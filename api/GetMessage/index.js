module.exports = async function (context, req) {
  const date = "2023-02-09T10:10:04.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

