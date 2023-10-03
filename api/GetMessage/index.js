module.exports = async function (context, req) {
  const date = "2023-10-03T11:07:32.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

