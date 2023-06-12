module.exports = async function (context, req) {
  const date = "2023-06-12T11:07:45.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

