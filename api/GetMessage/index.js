module.exports = async function (context, req) {
  const date = "2024-05-12T19:07:26.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

