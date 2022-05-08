module.exports = async function (context, req) {
  const date = "2022-05-08T11:09:03.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

