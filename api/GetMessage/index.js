module.exports = async function (context, req) {
  const date = "2022-06-13T11:09:38.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

