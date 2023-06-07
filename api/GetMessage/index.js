module.exports = async function (context, req) {
  const date = "2023-06-07T23:09:22.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

