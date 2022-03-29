module.exports = async function (context, req) {
  const date = "2022-03-29T02:28:48.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

