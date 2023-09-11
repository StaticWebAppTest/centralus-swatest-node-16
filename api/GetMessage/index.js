module.exports = async function (context, req) {
  const date = "2023-09-11T13:11:58.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

