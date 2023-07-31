module.exports = async function (context, req) {
  const date = "2023-07-31T11:07:20.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

