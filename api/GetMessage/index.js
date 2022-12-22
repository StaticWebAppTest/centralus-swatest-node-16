module.exports = async function (context, req) {
  const date = "2022-12-22T16:12:45.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

