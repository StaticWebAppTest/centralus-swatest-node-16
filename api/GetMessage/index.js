module.exports = async function (context, req) {
  const date = "2023-07-25T20:09:08.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

