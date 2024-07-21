module.exports = async function (context, req) {
  const date = "2024-07-21T09:09:49.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

