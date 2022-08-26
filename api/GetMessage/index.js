module.exports = async function (context, req) {
  const date = "2022-08-26T19:08:30.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

