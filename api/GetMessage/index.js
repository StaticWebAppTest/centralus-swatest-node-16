module.exports = async function (context, req) {
  const date = "2022-12-13T09:10:17.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

