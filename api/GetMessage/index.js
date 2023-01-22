module.exports = async function (context, req) {
  const date = "2023-01-22T05:08:30.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

