module.exports = async function (context, req) {
  const date = "2022-12-10T18:11:20.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

