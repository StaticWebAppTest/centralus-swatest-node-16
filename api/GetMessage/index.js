module.exports = async function (context, req) {
  const date = "2023-10-09T23:08:28.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

