module.exports = async function (context, req) {
  const date = "2022-04-25T06:14:55.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

