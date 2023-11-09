module.exports = async function (context, req) {
  const date = "2023-11-09T16:11:24.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

