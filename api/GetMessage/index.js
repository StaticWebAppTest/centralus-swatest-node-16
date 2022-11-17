module.exports = async function (context, req) {
  const date = "2022-11-17T13:29:02.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

