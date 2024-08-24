module.exports = async function (context, req) {
  const date = "2024-08-24T13:12:31.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

