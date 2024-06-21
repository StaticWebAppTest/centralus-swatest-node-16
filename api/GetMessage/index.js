module.exports = async function (context, req) {
  const date = "2024-06-21T04:12:54.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

