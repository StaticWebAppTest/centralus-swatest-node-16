module.exports = async function (context, req) {
  const date = "2024-01-19T13:12:01.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

