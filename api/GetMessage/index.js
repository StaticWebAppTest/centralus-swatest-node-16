module.exports = async function (context, req) {
  const date = "2022-07-16T18:12:39.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

