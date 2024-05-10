module.exports = async function (context, req) {
  const date = "2024-05-10T10:10:41.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

