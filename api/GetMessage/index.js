module.exports = async function (context, req) {
  const date = "2022-09-16T12:22:47.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

