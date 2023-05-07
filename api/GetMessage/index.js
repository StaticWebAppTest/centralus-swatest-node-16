module.exports = async function (context, req) {
  const date = "2023-05-07T11:06:35.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

