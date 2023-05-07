module.exports = async function (context, req) {
  const date = "2023-05-07T16:10:07.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

