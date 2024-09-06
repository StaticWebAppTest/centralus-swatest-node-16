module.exports = async function (context, req) {
  const date = "2024-09-06T02:07:45.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

