module.exports = async function (context, req) {
  const date = "2023-06-21T04:10:47.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

