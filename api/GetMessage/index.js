module.exports = async function (context, req) {
  const date = "2022-11-10T10:12:26.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

