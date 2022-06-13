module.exports = async function (context, req) {
  const date = "2022-06-13T13:30:58.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

