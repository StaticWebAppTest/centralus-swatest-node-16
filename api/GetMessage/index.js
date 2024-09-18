module.exports = async function (context, req) {
  const date = "2024-09-18T03:13:06.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

