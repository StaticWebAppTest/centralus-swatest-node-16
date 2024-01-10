module.exports = async function (context, req) {
  const date = "2024-01-10T20:10:11.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

