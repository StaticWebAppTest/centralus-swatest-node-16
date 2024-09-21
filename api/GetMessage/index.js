module.exports = async function (context, req) {
  const date = "2024-09-21T23:10:11.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

