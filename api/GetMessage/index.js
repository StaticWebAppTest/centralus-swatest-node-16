module.exports = async function (context, req) {
  const date = "2022-08-03T19:09:02.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

