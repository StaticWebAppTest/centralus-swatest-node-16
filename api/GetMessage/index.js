module.exports = async function (context, req) {
  const date = "2023-07-22T06:10:33.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

