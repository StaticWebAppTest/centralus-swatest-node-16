module.exports = async function (context, req) {
  const date = "2022-12-04T18:11:04.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

