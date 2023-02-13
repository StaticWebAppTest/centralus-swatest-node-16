module.exports = async function (context, req) {
  const date = "2023-02-13T15:10:46.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

