module.exports = async function (context, req) {
  const date = "2023-01-31T21:08:40.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

