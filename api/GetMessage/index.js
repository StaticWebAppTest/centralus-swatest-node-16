module.exports = async function (context, req) {
  const date = "2022-10-26T01:06:49.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

