module.exports = async function (context, req) {
  const date = "2022-12-05T09:10:05.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

