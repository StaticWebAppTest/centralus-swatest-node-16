module.exports = async function (context, req) {
  const date = "2023-03-27T15:10:22.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

