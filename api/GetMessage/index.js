module.exports = async function (context, req) {
  const date = "2023-09-13T22:07:45.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

