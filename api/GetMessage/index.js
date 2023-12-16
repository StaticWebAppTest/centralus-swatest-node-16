module.exports = async function (context, req) {
  const date = "2023-12-16T18:10:28.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

