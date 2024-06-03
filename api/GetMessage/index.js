module.exports = async function (context, req) {
  const date = "2024-06-03T12:19:14.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

