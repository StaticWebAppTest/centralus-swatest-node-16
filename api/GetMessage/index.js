module.exports = async function (context, req) {
  const date = "2022-10-14T19:15:35.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

