module.exports = async function (context, req) {
  const date = "2022-06-27T18:15:08.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

