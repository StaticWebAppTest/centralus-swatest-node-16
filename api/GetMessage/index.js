module.exports = async function (context, req) {
  const date = "2024-06-06T02:26:30.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

