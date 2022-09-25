module.exports = async function (context, req) {
  const date = "2022-09-25T23:12:25.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

