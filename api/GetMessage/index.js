module.exports = async function (context, req) {
  const date = "2025-05-06T21:12:19.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

