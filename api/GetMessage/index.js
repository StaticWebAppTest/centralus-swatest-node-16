module.exports = async function (context, req) {
  const date = "2023-04-14T05:08:27.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

