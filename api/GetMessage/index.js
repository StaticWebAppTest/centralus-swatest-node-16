module.exports = async function (context, req) {
  const date = "2022-11-23T17:08:46.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

