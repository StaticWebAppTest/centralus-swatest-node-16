module.exports = async function (context, req) {
  const date = "2024-06-07T02:30:05.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

