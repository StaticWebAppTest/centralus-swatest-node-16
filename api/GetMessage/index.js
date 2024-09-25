module.exports = async function (context, req) {
  const date = "2024-09-25T16:15:42.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

