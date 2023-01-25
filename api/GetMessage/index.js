module.exports = async function (context, req) {
  const date = "2023-01-25T20:09:55.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

