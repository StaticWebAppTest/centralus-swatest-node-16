module.exports = async function (context, req) {
  const date = "2024-02-07T23:09:29.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

