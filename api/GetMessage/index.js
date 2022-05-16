module.exports = async function (context, req) {
  const date = "2022-05-16T00:57:04.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

