module.exports = async function (context, req) {
  const date = "2022-06-29T12:20:03.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

