module.exports = async function (context, req) {
  const date = "2023-03-26T10:08:49.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

