module.exports = async function (context, req) {
  const date = "2024-09-29T15:11:42.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

