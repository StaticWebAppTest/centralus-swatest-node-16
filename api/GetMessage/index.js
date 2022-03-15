module.exports = async function (context, req) {
  const date = "2022-03-15T15:10:27.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

