module.exports = async function (context, req) {
  const date = "2023-04-22T04:10:28.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

