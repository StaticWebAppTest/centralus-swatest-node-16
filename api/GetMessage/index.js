module.exports = async function (context, req) {
  const date = "2024-05-04T04:12:27.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

