module.exports = async function (context, req) {
  const date = "2024-08-10T10:11:44.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

