module.exports = async function (context, req) {
  const date = "2023-09-13T18:11:07.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

