module.exports = async function (context, req) {
  const date = "2026-05-23T14:54:50.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

