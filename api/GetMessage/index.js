module.exports = async function (context, req) {
  const date = "2023-08-14T05:08:21.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

