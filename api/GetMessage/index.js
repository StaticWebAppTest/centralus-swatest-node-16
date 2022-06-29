module.exports = async function (context, req) {
  const date = "2022-06-29T07:10:05.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

