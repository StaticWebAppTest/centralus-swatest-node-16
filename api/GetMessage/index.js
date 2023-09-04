module.exports = async function (context, req) {
  const date = "2023-09-04T18:10:36.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

