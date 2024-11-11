module.exports = async function (context, req) {
  const date = "2024-11-11T13:19:04.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

