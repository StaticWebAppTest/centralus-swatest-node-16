module.exports = async function (context, req) {
  const date = "2024-08-09T14:10:13.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

