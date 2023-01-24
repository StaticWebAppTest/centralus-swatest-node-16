module.exports = async function (context, req) {
  const date = "2023-01-24T13:16:25.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

