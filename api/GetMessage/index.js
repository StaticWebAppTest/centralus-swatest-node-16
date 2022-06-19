module.exports = async function (context, req) {
  const date = "2022-06-19T11:08:12.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

