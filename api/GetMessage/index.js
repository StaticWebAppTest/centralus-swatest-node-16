module.exports = async function (context, req) {
  const date = "2023-04-07T13:11:10.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

