module.exports = async function (context, req) {
  const date = "2022-06-23T17:16:18.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

