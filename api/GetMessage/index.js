module.exports = async function (context, req) {
  const date = "2024-04-19T03:09:45.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

