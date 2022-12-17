module.exports = async function (context, req) {
  const date = "2022-12-17T11:06:53.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

