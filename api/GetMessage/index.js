module.exports = async function (context, req) {
  const date = "2022-05-05T07:11:28.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

