module.exports = async function (context, req) {
  const date = "2022-08-07T19:08:43.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

