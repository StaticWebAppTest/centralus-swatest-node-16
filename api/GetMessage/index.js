module.exports = async function (context, req) {
  const date = "2024-07-24T14:10:51.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

