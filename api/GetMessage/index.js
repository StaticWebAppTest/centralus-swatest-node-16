module.exports = async function (context, req) {
  const date = "2022-12-11T06:11:57.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

