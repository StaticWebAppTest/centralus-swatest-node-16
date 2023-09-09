module.exports = async function (context, req) {
  const date = "2023-09-09T08:09:51.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

