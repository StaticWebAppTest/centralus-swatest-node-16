module.exports = async function (context, req) {
  const date = "2023-05-13T22:07:45.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

