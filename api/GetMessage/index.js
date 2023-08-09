module.exports = async function (context, req) {
  const date = "2023-08-09T16:13:11.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

