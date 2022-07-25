module.exports = async function (context, req) {
  const date = "2022-07-25T21:09:42.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

