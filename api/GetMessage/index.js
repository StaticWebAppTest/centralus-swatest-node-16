module.exports = async function (context, req) {
  const date = "2022-04-05T15:11:08.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

