module.exports = async function (context, req) {
  const date = "2022-03-16T07:10:38.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

