module.exports = async function (context, req) {
  const date = "2023-07-09T23:09:18.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

