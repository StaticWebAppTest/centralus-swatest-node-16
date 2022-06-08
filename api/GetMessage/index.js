module.exports = async function (context, req) {
  const date = "2022-06-08T20:10:57.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

