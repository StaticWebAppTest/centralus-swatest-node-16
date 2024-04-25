module.exports = async function (context, req) {
  const date = "2024-04-25T16:12:02.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

