module.exports = async function (context, req) {
  const date = "2022-10-05T09:16:05.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

