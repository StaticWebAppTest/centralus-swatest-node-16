module.exports = async function (context, req) {
  const date = "2022-12-30T12:16:17.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

