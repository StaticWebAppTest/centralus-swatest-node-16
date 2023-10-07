module.exports = async function (context, req) {
  const date = "2023-10-07T02:14:54.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

