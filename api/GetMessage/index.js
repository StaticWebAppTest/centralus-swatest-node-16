module.exports = async function (context, req) {
  const date = "2024-08-22T02:03:31.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

