module.exports = async function (context, req) {
  const date = "2022-11-13T06:13:53.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

