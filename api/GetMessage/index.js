module.exports = async function (context, req) {
  const date = "2022-05-11T14:10:36.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

