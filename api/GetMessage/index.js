module.exports = async function (context, req) {
  const date = "2023-02-04T17:07:50.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

