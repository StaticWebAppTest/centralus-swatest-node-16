module.exports = async function (context, req) {
  const date = "2024-03-10T03:10:11.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

