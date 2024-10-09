module.exports = async function (context, req) {
  const date = "2024-10-09T22:10:52.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

