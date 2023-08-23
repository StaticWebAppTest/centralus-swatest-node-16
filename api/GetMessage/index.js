module.exports = async function (context, req) {
  const date = "2023-08-23T18:08:55.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

