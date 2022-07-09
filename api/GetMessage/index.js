module.exports = async function (context, req) {
  const date = "2022-07-09T14:09:04.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

