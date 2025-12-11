module.exports = async function (context, req) {
  const date = "2025-12-11T12:31:13.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

