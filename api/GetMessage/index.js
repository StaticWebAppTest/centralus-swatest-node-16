module.exports = async function (context, req) {
  const date = "2022-12-18T03:10:07.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

