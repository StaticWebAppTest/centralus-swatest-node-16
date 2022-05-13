module.exports = async function (context, req) {
  const date = "2022-05-13T18:14:47.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

