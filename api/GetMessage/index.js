module.exports = async function (context, req) {
  const date = "2022-04-09T00:46:22.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

