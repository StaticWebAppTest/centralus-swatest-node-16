module.exports = async function (context, req) {
  const date = "2022-12-03T18:11:12.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

