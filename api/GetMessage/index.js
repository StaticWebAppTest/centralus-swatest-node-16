module.exports = async function (context, req) {
  const date = "2022-12-14T10:10:27.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

