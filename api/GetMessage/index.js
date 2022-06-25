module.exports = async function (context, req) {
  const date = "2022-06-25T08:12:43.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

