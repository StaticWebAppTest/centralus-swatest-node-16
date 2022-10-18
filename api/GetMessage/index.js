module.exports = async function (context, req) {
  const date = "2022-10-18T07:33:46.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

