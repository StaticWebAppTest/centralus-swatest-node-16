module.exports = async function (context, req) {
  const date = "2023-12-06T08:12:19.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

