module.exports = async function (context, req) {
  const date = "2022-05-28T19:08:59.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

