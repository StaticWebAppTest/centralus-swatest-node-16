module.exports = async function (context, req) {
  const date = "2022-11-10T07:10:39.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

