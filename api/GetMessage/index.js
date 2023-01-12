module.exports = async function (context, req) {
  const date = "2023-01-12T03:10:09.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

