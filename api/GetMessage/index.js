module.exports = async function (context, req) {
  const date = "2022-12-16T18:11:16.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

