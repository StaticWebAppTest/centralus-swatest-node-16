module.exports = async function (context, req) {
  const date = "2022-10-12T01:22:46.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

