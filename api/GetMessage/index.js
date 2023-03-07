module.exports = async function (context, req) {
  const date = "2023-03-07T06:13:16.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

