module.exports = async function (context, req) {
  const date = "2022-08-07T12:18:16.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

