module.exports = async function (context, req) {
  const date = "2023-07-22T11:07:13.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

