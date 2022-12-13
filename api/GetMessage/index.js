module.exports = async function (context, req) {
  const date = "2022-12-13T11:08:04.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

