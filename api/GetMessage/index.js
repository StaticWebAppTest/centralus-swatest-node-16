module.exports = async function (context, req) {
  const date = "2024-05-18T13:10:29.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

