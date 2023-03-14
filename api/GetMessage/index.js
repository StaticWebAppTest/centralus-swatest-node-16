module.exports = async function (context, req) {
  const date = "2023-03-14T22:09:08.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

