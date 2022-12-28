module.exports = async function (context, req) {
  const date = "2022-12-28T18:11:26.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

