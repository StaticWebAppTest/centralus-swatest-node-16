module.exports = async function (context, req) {
  const date = "2023-11-06T20:09:23.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

