module.exports = async function (context, req) {
  const date = "2023-11-08T18:11:28.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

