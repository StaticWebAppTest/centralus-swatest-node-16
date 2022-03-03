module.exports = async function (context, req) {
  const date = "2022-03-03T18:11:44.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

