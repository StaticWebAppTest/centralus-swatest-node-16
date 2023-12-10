module.exports = async function (context, req) {
  const date = "2023-12-10T05:08:46.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

