module.exports = async function (context, req) {
  const date = "2023-11-13T08:12:28.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

