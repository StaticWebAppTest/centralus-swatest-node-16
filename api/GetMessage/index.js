module.exports = async function (context, req) {
  const date = "2022-11-30T13:25:09.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

