module.exports = async function (context, req) {
  const date = "2022-12-29T14:08:25.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

