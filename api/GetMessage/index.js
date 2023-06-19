module.exports = async function (context, req) {
  const date = "2023-06-19T09:09:41.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

