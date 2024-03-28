module.exports = async function (context, req) {
  const date = "2024-03-28T04:10:43.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

