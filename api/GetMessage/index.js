module.exports = async function (context, req) {
  const date = "2022-09-23T05:56:44.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

