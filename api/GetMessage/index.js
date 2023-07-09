module.exports = async function (context, req) {
  const date = "2023-07-09T13:14:31.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

