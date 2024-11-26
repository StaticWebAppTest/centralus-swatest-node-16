module.exports = async function (context, req) {
  const date = "2024-11-26T12:24:23.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

