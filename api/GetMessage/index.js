module.exports = async function (context, req) {
  const date = "2022-05-17T03:52:20.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

