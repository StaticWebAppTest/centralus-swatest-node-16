module.exports = async function (context, req) {
  const date = "2023-04-09T13:09:41.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

