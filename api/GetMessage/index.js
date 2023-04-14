module.exports = async function (context, req) {
  const date = "2023-04-14T22:08:03.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

