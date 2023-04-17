module.exports = async function (context, req) {
  const date = "2023-04-17T16:11:55.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

