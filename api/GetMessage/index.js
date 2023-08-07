module.exports = async function (context, req) {
  const date = "2023-08-07T13:12:00.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

