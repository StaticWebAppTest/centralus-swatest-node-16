module.exports = async function (context, req) {
  const date = "2023-07-03T08:12:59.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

