module.exports = async function (context, req) {
  const date = "2024-07-07T15:10:17.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

