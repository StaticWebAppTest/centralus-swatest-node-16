module.exports = async function (context, req) {
  const date = "2022-05-03T09:11:55.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

