module.exports = async function (context, req) {
  const date = "2023-01-24T03:10:15.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

