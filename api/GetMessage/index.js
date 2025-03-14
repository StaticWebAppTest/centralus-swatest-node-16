module.exports = async function (context, req) {
  const date = "2025-03-14T11:10:21.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

