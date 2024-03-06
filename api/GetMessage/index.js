module.exports = async function (context, req) {
  const date = "2024-03-06T02:14:43.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

