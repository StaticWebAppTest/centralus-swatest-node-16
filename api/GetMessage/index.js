module.exports = async function (context, req) {
  const date = "2024-11-07T07:10:56.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

