module.exports = async function (context, req) {
  const date = "2023-06-18T13:09:48.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

