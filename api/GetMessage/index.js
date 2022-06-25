module.exports = async function (context, req) {
  const date = "2022-06-25T15:10:01.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

