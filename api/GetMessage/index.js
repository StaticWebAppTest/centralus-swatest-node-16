module.exports = async function (context, req) {
  const date = "2022-08-03T10:11:55.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

