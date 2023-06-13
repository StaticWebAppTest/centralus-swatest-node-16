module.exports = async function (context, req) {
  const date = "2023-06-13T19:07:15.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

