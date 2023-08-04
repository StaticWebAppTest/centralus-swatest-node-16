module.exports = async function (context, req) {
  const date = "2023-08-04T03:08:49.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

