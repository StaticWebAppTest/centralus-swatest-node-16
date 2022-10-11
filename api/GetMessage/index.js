module.exports = async function (context, req) {
  const date = "2022-10-11T07:32:42.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

