module.exports = async function (context, req) {
  const date = "2024-05-06T06:13:38.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

