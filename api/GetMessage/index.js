module.exports = async function (context, req) {
  const date = "2022-12-23T05:08:56.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

