module.exports = async function (context, req) {
  const date = "2023-01-14T11:07:08.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

