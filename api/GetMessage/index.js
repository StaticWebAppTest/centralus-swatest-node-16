module.exports = async function (context, req) {
  const date = "2022-06-23T09:10:29.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

