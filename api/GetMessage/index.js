module.exports = async function (context, req) {
  const date = "2023-10-24T13:11:38.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

