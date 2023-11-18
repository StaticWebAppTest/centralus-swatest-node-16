module.exports = async function (context, req) {
  const date = "2023-11-18T08:10:51.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

