module.exports = async function (context, req) {
  const date = "2024-08-27T07:10:41.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

