module.exports = async function (context, req) {
  const date = "2023-10-15T05:08:07.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

