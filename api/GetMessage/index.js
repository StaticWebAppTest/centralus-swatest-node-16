module.exports = async function (context, req) {
  const date = "2022-05-21T19:08:51.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

