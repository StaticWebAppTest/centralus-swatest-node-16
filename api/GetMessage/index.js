module.exports = async function (context, req) {
  const date = "2022-05-17T18:13:47.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

