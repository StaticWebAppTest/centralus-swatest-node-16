module.exports = async function (context, req) {
  const date = "2022-03-27T15:10:00.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

