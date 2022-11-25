module.exports = async function (context, req) {
  const date = "2022-11-25T02:27:23.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

