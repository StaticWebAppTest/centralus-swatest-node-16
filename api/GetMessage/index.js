module.exports = async function (context, req) {
  const date = "2022-12-03T06:11:50.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

