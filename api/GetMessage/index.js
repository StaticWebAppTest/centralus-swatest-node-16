module.exports = async function (context, req) {
  const date = "2024-07-13T04:12:05.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

