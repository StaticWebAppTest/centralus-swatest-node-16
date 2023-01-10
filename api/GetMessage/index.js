module.exports = async function (context, req) {
  const date = "2023-01-10T08:12:55.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

