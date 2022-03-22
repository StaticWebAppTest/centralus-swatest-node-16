module.exports = async function (context, req) {
  const date = "2022-03-22T15:11:07.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

