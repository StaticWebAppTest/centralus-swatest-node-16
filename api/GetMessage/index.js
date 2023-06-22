module.exports = async function (context, req) {
  const date = "2023-06-22T11:07:36.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

