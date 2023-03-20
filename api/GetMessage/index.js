module.exports = async function (context, req) {
  const date = "2023-03-20T15:10:08.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

