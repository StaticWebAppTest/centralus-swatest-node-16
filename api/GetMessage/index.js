module.exports = async function (context, req) {
  const date = "2023-07-16T13:14:03.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

