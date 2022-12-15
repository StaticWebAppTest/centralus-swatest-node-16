module.exports = async function (context, req) {
  const date = "2022-12-15T14:09:12.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

