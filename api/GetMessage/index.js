module.exports = async function (context, req) {
  const date = "2023-11-13T13:11:47.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

