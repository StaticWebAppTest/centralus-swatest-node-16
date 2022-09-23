module.exports = async function (context, req) {
  const date = "2022-09-23T18:15:56.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

