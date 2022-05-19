module.exports = async function (context, req) {
  const date = "2022-05-19T16:33:46.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

