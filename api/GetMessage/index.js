module.exports = async function (context, req) {
  const date = "2023-04-22T17:07:21.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

