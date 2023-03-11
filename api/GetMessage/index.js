module.exports = async function (context, req) {
  const date = "2023-03-11T11:07:49.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

