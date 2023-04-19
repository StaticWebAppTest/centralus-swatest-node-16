module.exports = async function (context, req) {
  const date = "2023-04-19T04:11:11.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

