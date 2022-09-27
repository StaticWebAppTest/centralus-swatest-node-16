module.exports = async function (context, req) {
  const date = "2022-09-27T04:04:46.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

