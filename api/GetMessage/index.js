module.exports = async function (context, req) {
  const date = "2022-10-12T14:32:26.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

