module.exports = async function (context, req) {
  const date = "2023-01-19T03:12:23.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

