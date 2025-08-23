module.exports = async function (context, req) {
  const date = "2025-08-23T17:10:02.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

