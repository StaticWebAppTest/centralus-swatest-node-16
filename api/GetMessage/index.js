module.exports = async function (context, req) {
  const date = "2022-03-31T10:12:23.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

