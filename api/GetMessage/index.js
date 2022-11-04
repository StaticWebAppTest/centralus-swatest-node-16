module.exports = async function (context, req) {
  const date = "2022-11-04T21:10:06.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

