module.exports = async function (context, req) {
  const date = "2024-08-24T09:10:07.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

