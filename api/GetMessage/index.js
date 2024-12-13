module.exports = async function (context, req) {
  const date = "2024-12-13T11:10:33.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

