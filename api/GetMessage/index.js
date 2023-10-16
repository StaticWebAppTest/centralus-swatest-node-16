module.exports = async function (context, req) {
  const date = "2023-10-16T03:09:37.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

