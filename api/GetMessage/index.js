module.exports = async function (context, req) {
  const date = "2022-05-23T04:26:42.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

