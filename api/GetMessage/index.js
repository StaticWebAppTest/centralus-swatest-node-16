module.exports = async function (context, req) {
  const date = "2023-07-06T14:10:04.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

