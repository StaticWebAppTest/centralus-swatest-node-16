module.exports = async function (context, req) {
  const date = "2022-11-29T19:08:19.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

