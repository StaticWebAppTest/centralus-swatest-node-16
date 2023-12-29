module.exports = async function (context, req) {
  const date = "2023-12-29T04:11:08.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

