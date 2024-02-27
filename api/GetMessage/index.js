module.exports = async function (context, req) {
  const date = "2024-02-27T15:09:20.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

