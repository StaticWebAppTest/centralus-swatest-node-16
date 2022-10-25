module.exports = async function (context, req) {
  const date = "2022-10-25T22:13:57.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

