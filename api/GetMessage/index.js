module.exports = async function (context, req) {
  const date = "2022-06-21T16:17:35.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

