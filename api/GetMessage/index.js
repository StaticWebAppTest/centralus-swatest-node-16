module.exports = async function (context, req) {
  const date = "2022-06-10T10:11:36.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

