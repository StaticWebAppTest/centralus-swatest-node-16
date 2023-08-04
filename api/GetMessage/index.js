module.exports = async function (context, req) {
  const date = "2023-08-04T16:10:46.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

