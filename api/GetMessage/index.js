module.exports = async function (context, req) {
  const date = "2024-12-12T19:10:05.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

