module.exports = async function (context, req) {
  const date = "2022-11-23T14:09:43.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

