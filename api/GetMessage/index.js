module.exports = async function (context, req) {
  const date = "2024-07-09T08:12:13.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

