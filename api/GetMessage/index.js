module.exports = async function (context, req) {
  const date = "2023-08-11T16:10:02.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

