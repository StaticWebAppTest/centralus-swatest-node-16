module.exports = async function (context, req) {
  const date = "2025-04-12T07:11:07.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

