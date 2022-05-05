module.exports = async function (context, req) {
  const date = "2022-05-05T18:13:03.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

