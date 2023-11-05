module.exports = async function (context, req) {
  const date = "2023-11-05T07:07:42.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

