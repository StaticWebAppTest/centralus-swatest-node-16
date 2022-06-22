module.exports = async function (context, req) {
  const date = "2022-06-22T20:11:07.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

