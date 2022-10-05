module.exports = async function (context, req) {
  const date = "2022-10-05T21:11:56.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

