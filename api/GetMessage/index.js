module.exports = async function (context, req) {
  const date = "2023-05-09T16:11:16.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

