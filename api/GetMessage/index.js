module.exports = async function (context, req) {
  const date = "2022-04-21T16:15:24.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

