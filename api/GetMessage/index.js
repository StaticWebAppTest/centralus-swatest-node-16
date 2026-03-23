module.exports = async function (context, req) {
  const date = "2026-03-23T11:38:42.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

