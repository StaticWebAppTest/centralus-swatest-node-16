module.exports = async function (context, req) {
  const date = "2022-03-14T10:11:24.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

