module.exports = async function (context, req) {
  const date = "2024-02-19T08:12:18.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

