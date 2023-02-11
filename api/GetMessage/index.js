module.exports = async function (context, req) {
  const date = "2023-02-11T13:13:52.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

