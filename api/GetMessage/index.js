module.exports = async function (context, req) {
  const date = "2024-09-28T12:19:56.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

