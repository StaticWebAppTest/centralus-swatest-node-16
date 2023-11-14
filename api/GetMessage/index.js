module.exports = async function (context, req) {
  const date = "2023-11-14T14:08:32.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

