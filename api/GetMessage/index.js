module.exports = async function (context, req) {
  const date = "2022-06-07T19:09:08.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

