module.exports = async function (context, req) {
  const date = "2022-05-27T14:10:05.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

