module.exports = async function (context, req) {
  const date = "2023-01-11T14:11:44.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

