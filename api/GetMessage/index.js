module.exports = async function (context, req) {
  const date = "2022-07-30T12:17:45.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

