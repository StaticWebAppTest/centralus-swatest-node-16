module.exports = async function (context, req) {
  const date = "2023-09-14T04:10:19.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

