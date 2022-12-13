module.exports = async function (context, req) {
  const date = "2022-12-13T18:12:06.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

