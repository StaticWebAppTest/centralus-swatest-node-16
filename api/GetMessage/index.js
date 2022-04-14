module.exports = async function (context, req) {
  const date = "2022-04-14T09:10:47.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

