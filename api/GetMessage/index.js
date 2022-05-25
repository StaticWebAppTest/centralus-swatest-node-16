module.exports = async function (context, req) {
  const date = "2022-05-25T23:11:13.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

