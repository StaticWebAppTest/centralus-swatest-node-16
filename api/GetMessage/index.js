module.exports = async function (context, req) {
  const date = "2024-09-06T23:12:08.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

