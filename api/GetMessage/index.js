module.exports = async function (context, req) {
  const date = "2024-05-13T19:07:45.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

