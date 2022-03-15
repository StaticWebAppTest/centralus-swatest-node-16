module.exports = async function (context, req) {
  const date = "2022-03-15T18:12:34.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

