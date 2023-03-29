module.exports = async function (context, req) {
  const date = "2023-03-29T23:09:31.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

