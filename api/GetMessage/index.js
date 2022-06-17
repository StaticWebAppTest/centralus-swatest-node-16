module.exports = async function (context, req) {
  const date = "2022-06-17T03:53:03.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

