module.exports = async function (context, req) {
  const date = "2025-05-14T17:11:52.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

