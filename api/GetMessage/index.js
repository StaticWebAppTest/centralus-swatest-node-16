module.exports = async function (context, req) {
  const date = "2023-07-07T06:13:15.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

