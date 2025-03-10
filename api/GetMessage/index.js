module.exports = async function (context, req) {
  const date = "2025-03-10T11:08:51.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

