module.exports = async function (context, req) {
  const date = "2022-05-05T15:15:15.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

