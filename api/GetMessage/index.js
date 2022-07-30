module.exports = async function (context, req) {
  const date = "2022-07-30T06:12:50.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

