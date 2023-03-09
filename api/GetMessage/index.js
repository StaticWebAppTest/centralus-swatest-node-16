module.exports = async function (context, req) {
  const date = "2023-03-09T02:24:14.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

