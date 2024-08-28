module.exports = async function (context, req) {
  const date = "2024-08-28T07:10:17.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

