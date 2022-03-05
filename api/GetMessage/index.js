module.exports = async function (context, req) {
  const date = "2022-03-05T22:09:36.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

