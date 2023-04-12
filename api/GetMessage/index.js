module.exports = async function (context, req) {
  const date = "2023-04-12T11:07:25.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

