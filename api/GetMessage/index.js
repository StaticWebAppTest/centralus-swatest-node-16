module.exports = async function (context, req) {
  const date = "2023-10-20T15:07:58.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

