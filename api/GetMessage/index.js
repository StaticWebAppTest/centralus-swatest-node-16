module.exports = async function (context, req) {
  const date = "2024-03-12T11:07:23.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

