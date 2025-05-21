module.exports = async function (context, req) {
  const date = "2025-05-21T04:17:35.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

