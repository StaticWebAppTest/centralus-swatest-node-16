module.exports = async function (context, req) {
  const date = "2023-09-04T16:10:37.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

