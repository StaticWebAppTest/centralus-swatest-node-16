module.exports = async function (context, req) {
  const date = "2025-03-20T15:13:54.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

