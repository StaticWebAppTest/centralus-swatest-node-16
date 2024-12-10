module.exports = async function (context, req) {
  const date = "2024-12-10T03:00:15.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

