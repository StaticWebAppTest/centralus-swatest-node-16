module.exports = async function (context, req) {
  const date = "2022-06-23T21:09:54.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

