module.exports = async function (context, req) {
  const date = "2022-07-01T13:32:54.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

