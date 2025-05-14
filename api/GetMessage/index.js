module.exports = async function (context, req) {
  const date = "2025-05-14T21:10:32.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

