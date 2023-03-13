module.exports = async function (context, req) {
  const date = "2023-03-13T23:09:58.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

