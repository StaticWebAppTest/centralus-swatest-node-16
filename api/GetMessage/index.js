module.exports = async function (context, req) {
  const date = "2023-03-24T04:11:25.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

