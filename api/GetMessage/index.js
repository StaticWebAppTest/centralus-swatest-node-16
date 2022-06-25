module.exports = async function (context, req) {
  const date = "2022-06-25T21:08:48.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

