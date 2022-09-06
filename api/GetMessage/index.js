module.exports = async function (context, req) {
  const date = "2022-09-06T13:36:57.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

