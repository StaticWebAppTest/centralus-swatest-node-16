module.exports = async function (context, req) {
  const date = "2023-08-11T17:07:22.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

