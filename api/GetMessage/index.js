module.exports = async function (context, req) {
  const date = "2022-10-11T18:18:12.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

