module.exports = async function (context, req) {
  const date = "2025-05-15T01:02:48.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

