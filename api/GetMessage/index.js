module.exports = async function (context, req) {
  const date = "2022-03-11T11:08:38.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

