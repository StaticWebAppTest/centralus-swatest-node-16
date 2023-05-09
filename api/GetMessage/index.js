module.exports = async function (context, req) {
  const date = "2023-05-09T12:54:42.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

