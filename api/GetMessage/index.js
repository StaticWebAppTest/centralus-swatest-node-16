module.exports = async function (context, req) {
  const date = "2023-01-15T18:10:40.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

