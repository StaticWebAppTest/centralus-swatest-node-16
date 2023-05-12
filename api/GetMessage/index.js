module.exports = async function (context, req) {
  const date = "2023-05-12T15:08:38.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

