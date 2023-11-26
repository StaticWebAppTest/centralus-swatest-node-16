module.exports = async function (context, req) {
  const date = "2023-11-26T15:08:19.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

