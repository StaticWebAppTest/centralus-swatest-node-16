module.exports = async function (context, req) {
  const date = "2022-04-07T19:08:43.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

