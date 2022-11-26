module.exports = async function (context, req) {
  const date = "2022-11-26T23:09:33.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

