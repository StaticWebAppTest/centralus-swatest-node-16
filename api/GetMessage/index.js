module.exports = async function (context, req) {
  const date = "2023-12-04T18:12:06.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

