module.exports = async function (context, req) {
  const date = "2024-07-04T17:10:02.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

