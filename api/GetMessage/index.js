module.exports = async function (context, req) {
  const date = "2022-12-18T18:10:20.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

