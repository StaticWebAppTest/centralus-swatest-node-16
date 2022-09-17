module.exports = async function (context, req) {
  const date = "2022-09-17T17:18:02.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

