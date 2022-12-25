module.exports = async function (context, req) {
  const date = "2022-12-25T05:08:20.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

