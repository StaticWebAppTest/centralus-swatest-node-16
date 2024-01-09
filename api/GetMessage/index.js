module.exports = async function (context, req) {
  const date = "2024-01-09T10:10:07.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

