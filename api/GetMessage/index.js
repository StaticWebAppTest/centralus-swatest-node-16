module.exports = async function (context, req) {
  const date = "2022-06-25T22:10:23.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

