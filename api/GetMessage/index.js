module.exports = async function (context, req) {
  const date = "2023-05-17T16:11:17.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

