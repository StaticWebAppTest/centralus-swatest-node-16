module.exports = async function (context, req) {
  const date = "2023-09-06T16:11:29.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

