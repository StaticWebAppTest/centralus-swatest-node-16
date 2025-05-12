module.exports = async function (context, req) {
  const date = "2025-05-12T12:27:19.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

