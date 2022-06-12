module.exports = async function (context, req) {
  const date = "2022-06-12T04:17:35.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

