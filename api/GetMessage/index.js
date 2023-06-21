module.exports = async function (context, req) {
  const date = "2023-06-21T08:11:15.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

