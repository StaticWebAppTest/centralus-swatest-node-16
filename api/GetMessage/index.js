module.exports = async function (context, req) {
  const date = "2024-08-18T11:08:01.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

