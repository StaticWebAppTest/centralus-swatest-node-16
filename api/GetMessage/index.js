module.exports = async function (context, req) {
  const date = "2023-08-21T13:11:15.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

