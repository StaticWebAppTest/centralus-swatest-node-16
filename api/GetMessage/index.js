module.exports = async function (context, req) {
  const date = "2022-11-15T07:10:25.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

