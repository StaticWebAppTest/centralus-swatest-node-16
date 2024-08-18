module.exports = async function (context, req) {
  const date = "2024-08-18T10:11:04.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

