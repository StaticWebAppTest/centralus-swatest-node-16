module.exports = async function (context, req) {
  const date = "2023-02-04T13:12:44.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

