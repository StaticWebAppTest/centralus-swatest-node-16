module.exports = async function (context, req) {
  const date = "2023-05-07T08:10:13.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

