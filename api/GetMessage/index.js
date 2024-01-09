module.exports = async function (context, req) {
  const date = "2024-01-09T01:53:09.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

