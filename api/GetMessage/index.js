module.exports = async function (context, req) {
  const date = "2023-10-27T20:09:07.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

