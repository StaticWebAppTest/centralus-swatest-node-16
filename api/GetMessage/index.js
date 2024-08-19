module.exports = async function (context, req) {
  const date = "2024-08-19T12:20:17.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

