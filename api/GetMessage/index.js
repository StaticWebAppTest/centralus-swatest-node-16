module.exports = async function (context, req) {
  const date = "2023-03-26T04:10:57.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

