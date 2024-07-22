module.exports = async function (context, req) {
  const date = "2024-07-22T07:10:52.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

