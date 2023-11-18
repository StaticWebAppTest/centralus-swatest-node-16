module.exports = async function (context, req) {
  const date = "2023-11-18T15:08:08.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

