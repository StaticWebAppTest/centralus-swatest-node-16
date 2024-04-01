module.exports = async function (context, req) {
  const date = "2024-04-01T08:13:37.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

