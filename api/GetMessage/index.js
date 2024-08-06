module.exports = async function (context, req) {
  const date = "2024-08-06T05:11:04.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

