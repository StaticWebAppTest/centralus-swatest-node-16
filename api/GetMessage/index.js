module.exports = async function (context, req) {
  const date = "2023-05-21T08:10:14.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

