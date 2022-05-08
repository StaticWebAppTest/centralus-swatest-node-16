module.exports = async function (context, req) {
  const date = "2022-05-08T03:37:27.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

