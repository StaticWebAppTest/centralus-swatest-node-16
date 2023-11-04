module.exports = async function (context, req) {
  const date = "2023-11-04T18:10:10.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

