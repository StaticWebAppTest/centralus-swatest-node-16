module.exports = async function (context, req) {
  const date = "2023-05-03T15:09:02.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

