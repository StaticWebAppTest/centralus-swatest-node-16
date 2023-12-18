module.exports = async function (context, req) {
  const date = "2023-12-18T11:08:22.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

