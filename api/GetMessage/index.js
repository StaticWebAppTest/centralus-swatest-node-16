module.exports = async function (context, req) {
  const date = "2023-03-18T14:08:07.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

