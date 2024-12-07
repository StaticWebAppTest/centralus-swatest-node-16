module.exports = async function (context, req) {
  const date = "2024-12-07T18:15:34.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

