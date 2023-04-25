module.exports = async function (context, req) {
  const date = "2023-04-25T04:10:48.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

