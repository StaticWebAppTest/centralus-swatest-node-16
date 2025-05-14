module.exports = async function (context, req) {
  const date = "2025-05-14T11:11:19.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

