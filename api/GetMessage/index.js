module.exports = async function (context, req) {
  const date = "2023-12-22T18:11:00.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

