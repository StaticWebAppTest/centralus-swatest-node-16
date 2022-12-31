module.exports = async function (context, req) {
  const date = "2022-12-31T10:08:46.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

