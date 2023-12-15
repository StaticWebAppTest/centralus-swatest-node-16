module.exports = async function (context, req) {
  const date = "2023-12-15T18:11:39.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

