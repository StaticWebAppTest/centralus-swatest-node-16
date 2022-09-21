module.exports = async function (context, req) {
  const date = "2022-09-21T10:13:26.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

