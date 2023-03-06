module.exports = async function (context, req) {
  const date = "2023-03-06T17:10:01.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

