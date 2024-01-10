module.exports = async function (context, req) {
  const date = "2024-01-10T23:08:56.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

