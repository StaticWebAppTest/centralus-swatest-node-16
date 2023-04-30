module.exports = async function (context, req) {
  const date = "2023-04-30T14:07:12.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

