module.exports = async function (context, req) {
  const date = "2023-05-21T20:08:52.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

