module.exports = async function (context, req) {
  const date = "2023-08-07T16:10:53.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

