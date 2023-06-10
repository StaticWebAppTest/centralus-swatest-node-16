module.exports = async function (context, req) {
  const date = "2023-06-10T21:07:15.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

