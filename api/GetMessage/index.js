module.exports = async function (context, req) {
  const date = "2023-07-14T08:12:26.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

