module.exports = async function (context, req) {
  const date = "2024-07-22T16:13:19.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

