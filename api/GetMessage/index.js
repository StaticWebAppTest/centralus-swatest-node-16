module.exports = async function (context, req) {
  const date = "2024-04-22T09:10:28.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

