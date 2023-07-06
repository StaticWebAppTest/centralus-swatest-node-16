module.exports = async function (context, req) {
  const date = "2023-07-06T05:10:43.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

