module.exports = async function (context, req) {
  const date = "2022-08-19T18:14:27.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

