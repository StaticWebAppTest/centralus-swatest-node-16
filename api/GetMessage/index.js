module.exports = async function (context, req) {
  const date = "2023-10-09T08:12:26.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

