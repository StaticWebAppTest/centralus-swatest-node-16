module.exports = async function (context, req) {
  const date = "2022-09-10T07:12:45.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

