module.exports = async function (context, req) {
  const date = "2023-09-28T02:15:43.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

