module.exports = async function (context, req) {
  const date = "2025-04-27T17:11:26.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

