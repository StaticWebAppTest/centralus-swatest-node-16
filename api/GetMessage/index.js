module.exports = async function (context, req) {
  const date = "2022-04-13T10:11:42.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

