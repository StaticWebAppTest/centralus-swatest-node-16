module.exports = async function (context, req) {
  const date = "2022-09-04T22:11:07.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

