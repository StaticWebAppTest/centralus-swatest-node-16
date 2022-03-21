module.exports = async function (context, req) {
  const date = "2022-03-21T08:13:36.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

