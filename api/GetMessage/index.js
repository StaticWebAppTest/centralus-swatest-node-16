module.exports = async function (context, req) {
  const date = "2024-09-24T11:09:28.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

