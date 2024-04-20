module.exports = async function (context, req) {
  const date = "2024-04-20T14:07:32.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

