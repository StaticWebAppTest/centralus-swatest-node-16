module.exports = async function (context, req) {
  const date = "2022-12-28T11:07:48.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

