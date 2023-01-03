module.exports = async function (context, req) {
  const date = "2023-01-03T11:07:45.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

