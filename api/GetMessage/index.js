module.exports = async function (context, req) {
  const date = "2024-03-13T06:12:27.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

