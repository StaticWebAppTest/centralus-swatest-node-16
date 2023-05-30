module.exports = async function (context, req) {
  const date = "2023-05-30T08:11:40.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

