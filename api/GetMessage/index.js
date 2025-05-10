module.exports = async function (context, req) {
  const date = "2025-05-10T07:11:28.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

