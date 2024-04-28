module.exports = async function (context, req) {
  const date = "2024-04-28T23:08:39.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

