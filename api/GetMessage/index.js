module.exports = async function (context, req) {
  const date = "2023-09-24T14:07:03.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

