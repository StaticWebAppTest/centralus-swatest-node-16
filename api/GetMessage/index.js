module.exports = async function (context, req) {
  const date = "2024-11-29T12:24:08.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

