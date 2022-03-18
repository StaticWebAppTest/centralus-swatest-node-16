module.exports = async function (context, req) {
  const date = "2022-03-18T16:14:06.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

