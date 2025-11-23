module.exports = async function (context, req) {
  const date = "2025-11-23T17:11:01.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

