module.exports = async function (context, req) {
  const date = "2023-03-30T04:11:04.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

