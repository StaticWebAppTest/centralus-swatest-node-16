module.exports = async function (context, req) {
  const date = "2024-12-13T05:12:42.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

