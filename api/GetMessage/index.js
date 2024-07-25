module.exports = async function (context, req) {
  const date = "2024-07-25T06:15:18.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

