module.exports = async function (context, req) {
  const date = "2023-09-22T02:15:56.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

