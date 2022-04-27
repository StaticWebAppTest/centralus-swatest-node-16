module.exports = async function (context, req) {
  const date = "2022-04-27T10:12:33.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

