module.exports = async function (context, req) {
  const date = "2023-07-06T01:02:02.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

