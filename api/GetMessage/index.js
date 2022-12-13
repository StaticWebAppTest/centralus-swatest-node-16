module.exports = async function (context, req) {
  const date = "2022-12-13T04:12:16.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

