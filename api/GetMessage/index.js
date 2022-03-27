module.exports = async function (context, req) {
  const date = "2022-03-27T10:10:39.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

