module.exports = async function (context, req) {
  const date = "2022-08-29T01:09:57.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

