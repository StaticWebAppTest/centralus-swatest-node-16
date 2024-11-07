module.exports = async function (context, req) {
  const date = "2024-11-07T02:12:54.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

