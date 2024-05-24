module.exports = async function (context, req) {
  const date = "2024-05-24T09:11:08.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

