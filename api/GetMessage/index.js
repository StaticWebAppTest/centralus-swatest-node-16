module.exports = async function (context, req) {
  const date = "2024-09-08T14:10:09.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

