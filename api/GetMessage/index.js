module.exports = async function (context, req) {
  const date = "2024-07-10T10:11:24.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

