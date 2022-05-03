module.exports = async function (context, req) {
  const date = "2022-05-03T14:14:18.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

