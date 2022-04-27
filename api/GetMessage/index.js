module.exports = async function (context, req) {
  const date = "2022-04-27T18:13:42.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

