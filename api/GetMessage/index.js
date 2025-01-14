module.exports = async function (context, req) {
  const date = "2025-01-14T07:10:50.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

