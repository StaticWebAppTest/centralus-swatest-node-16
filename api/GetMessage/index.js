module.exports = async function (context, req) {
  const date = "2022-03-08T21:08:52.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

