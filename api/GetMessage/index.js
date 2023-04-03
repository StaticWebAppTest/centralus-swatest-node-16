module.exports = async function (context, req) {
  const date = "2023-04-03T18:10:57.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

