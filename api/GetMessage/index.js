module.exports = async function (context, req) {
  const date = "2023-06-07T08:11:28.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

