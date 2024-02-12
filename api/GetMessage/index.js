module.exports = async function (context, req) {
  const date = "2024-02-12T11:07:25.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

