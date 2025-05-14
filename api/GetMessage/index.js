module.exports = async function (context, req) {
  const date = "2025-05-14T15:13:52.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

