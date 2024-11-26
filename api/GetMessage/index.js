module.exports = async function (context, req) {
  const date = "2024-11-26T04:15:02.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

