module.exports = async function (context, req) {
  const date = "2022-09-18T18:14:35.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

