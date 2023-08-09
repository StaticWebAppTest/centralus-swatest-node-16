module.exports = async function (context, req) {
  const date = "2023-08-09T08:12:14.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

