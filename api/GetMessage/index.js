module.exports = async function (context, req) {
  const date = "2022-07-12T10:12:57.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

