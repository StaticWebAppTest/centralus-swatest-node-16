module.exports = async function (context, req) {
  const date = "2022-08-30T08:15:05.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

