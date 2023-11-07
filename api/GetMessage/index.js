module.exports = async function (context, req) {
  const date = "2023-11-07T08:11:50.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

