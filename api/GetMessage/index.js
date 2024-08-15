module.exports = async function (context, req) {
  const date = "2024-08-15T20:11:08.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

