module.exports = async function (context, req) {
  const date = "2022-03-27T17:10:27.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

