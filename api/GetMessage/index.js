module.exports = async function (context, req) {
  const date = "2022-10-19T10:20:40.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

