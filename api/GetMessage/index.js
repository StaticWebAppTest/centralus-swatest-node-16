module.exports = async function (context, req) {
  const date = "2022-03-09T16:14:28.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

