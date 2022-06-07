module.exports = async function (context, req) {
  const date = "2022-06-07T08:19:18.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

