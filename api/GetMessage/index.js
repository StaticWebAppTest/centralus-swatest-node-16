module.exports = async function (context, req) {
  const date = "2022-11-19T09:10:04.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

