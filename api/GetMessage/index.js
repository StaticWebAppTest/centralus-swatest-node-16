module.exports = async function (context, req) {
  const date = "2023-10-27T08:11:22.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

