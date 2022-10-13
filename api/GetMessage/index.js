module.exports = async function (context, req) {
  const date = "2022-10-13T06:39:25.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

