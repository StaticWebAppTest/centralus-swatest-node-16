module.exports = async function (context, req) {
  const date = "2023-03-03T08:12:54.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

