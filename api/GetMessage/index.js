module.exports = async function (context, req) {
  const date = "2025-03-25T11:10:40.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

