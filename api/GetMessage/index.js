module.exports = async function (context, req) {
  const date = "2024-02-14T20:09:12.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

