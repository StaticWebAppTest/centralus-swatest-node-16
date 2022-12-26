module.exports = async function (context, req) {
  const date = "2022-12-26T18:11:18.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

