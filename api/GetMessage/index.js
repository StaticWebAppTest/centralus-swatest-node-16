module.exports = async function (context, req) {
  const date = "2022-04-25T03:40:03.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

