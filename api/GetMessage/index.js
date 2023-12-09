module.exports = async function (context, req) {
  const date = "2023-12-09T16:10:27.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

