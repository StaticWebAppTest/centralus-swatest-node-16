module.exports = async function (context, req) {
  const date = "2024-03-21T02:17:37.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

