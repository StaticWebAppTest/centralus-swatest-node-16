module.exports = async function (context, req) {
  const date = "2023-07-04T05:09:54.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

