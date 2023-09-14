module.exports = async function (context, req) {
  const date = "2023-09-14T07:08:41.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

