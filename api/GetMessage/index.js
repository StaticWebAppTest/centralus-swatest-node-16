module.exports = async function (context, req) {
  const date = "2022-04-15T10:11:30.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

