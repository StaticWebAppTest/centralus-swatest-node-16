module.exports = async function (context, req) {
  const date = "2022-06-03T09:11:47.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

