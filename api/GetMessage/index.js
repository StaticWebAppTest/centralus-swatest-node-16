module.exports = async function (context, req) {
  const date = "2025-05-23T17:12:15.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

