module.exports = async function (context, req) {
  const date = "2023-06-21T11:07:13.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

