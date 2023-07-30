module.exports = async function (context, req) {
  const date = "2023-07-30T10:08:00.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

