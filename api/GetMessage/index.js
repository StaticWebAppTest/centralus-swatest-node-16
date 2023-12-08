module.exports = async function (context, req) {
  const date = "2023-12-08T16:11:59.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

