module.exports = async function (context, req) {
  const date = "2023-01-10T20:10:02.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

