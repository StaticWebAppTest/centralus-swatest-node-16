module.exports = async function (context, req) {
  const date = "2022-03-10T08:12:29.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

