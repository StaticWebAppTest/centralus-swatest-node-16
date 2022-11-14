module.exports = async function (context, req) {
  const date = "2022-11-14T13:42:46.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

