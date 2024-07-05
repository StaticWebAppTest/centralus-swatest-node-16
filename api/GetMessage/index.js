module.exports = async function (context, req) {
  const date = "2024-07-05T03:11:43.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

