module.exports = async function (context, req) {
  const date = "2022-08-19T12:20:22.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

