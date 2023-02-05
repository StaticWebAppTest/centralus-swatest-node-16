module.exports = async function (context, req) {
  const date = "2023-02-05T16:11:28.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

