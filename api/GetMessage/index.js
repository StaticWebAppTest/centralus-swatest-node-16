module.exports = async function (context, req) {
  const date = "2022-03-01T15:10:50.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

