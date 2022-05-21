module.exports = async function (context, req) {
  const date = "2022-05-21T03:22:14.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

