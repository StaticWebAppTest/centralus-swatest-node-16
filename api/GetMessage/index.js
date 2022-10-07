module.exports = async function (context, req) {
  const date = "2022-10-07T08:15:47.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

