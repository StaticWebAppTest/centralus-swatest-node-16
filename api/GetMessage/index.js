module.exports = async function (context, req) {
  const date = "2023-12-04T00:44:02.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

