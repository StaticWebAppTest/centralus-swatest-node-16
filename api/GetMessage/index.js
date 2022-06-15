module.exports = async function (context, req) {
  const date = "2022-06-15T18:12:31.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

