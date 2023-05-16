module.exports = async function (context, req) {
  const date = "2023-05-16T20:09:09.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

