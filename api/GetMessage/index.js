module.exports = async function (context, req) {
  const date = "2022-05-19T04:25:57.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

