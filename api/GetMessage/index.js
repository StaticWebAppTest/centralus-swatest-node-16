module.exports = async function (context, req) {
  const date = "2023-04-01T06:10:57.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

