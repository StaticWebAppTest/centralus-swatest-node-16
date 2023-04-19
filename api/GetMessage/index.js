module.exports = async function (context, req) {
  const date = "2023-04-19T14:08:32.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

