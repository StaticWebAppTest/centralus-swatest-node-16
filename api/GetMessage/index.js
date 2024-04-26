module.exports = async function (context, req) {
  const date = "2024-04-26T11:08:01.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

