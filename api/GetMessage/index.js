module.exports = async function (context, req) {
  const date = "2023-01-04T15:11:32.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

