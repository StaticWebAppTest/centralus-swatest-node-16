module.exports = async function (context, req) {
  const date = "2022-12-19T06:12:26.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

