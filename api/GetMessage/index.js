module.exports = async function (context, req) {
  const date = "2024-05-08T16:12:27.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

