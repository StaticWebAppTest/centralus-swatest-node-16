module.exports = async function (context, req) {
  const date = "2022-06-18T21:09:13.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

