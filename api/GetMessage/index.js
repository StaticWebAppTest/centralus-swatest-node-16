module.exports = async function (context, req) {
  const date = "2023-03-25T16:10:46.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

