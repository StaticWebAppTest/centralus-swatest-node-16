module.exports = async function (context, req) {
  const date = "2024-01-19T08:12:23.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

