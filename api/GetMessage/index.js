module.exports = async function (context, req) {
  const date = "2024-09-13T11:10:08.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

