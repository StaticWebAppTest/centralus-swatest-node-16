module.exports = async function (context, req) {
  const date = "2023-04-08T06:10:45.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

