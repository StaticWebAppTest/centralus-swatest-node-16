module.exports = async function (context, req) {
  const date = "2024-04-09T03:11:08.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

