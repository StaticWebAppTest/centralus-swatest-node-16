module.exports = async function (context, req) {
  const date = "2024-07-13T14:08:20.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

