module.exports = async function (context, req) {
  const date = "2022-05-15T11:09:36.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

