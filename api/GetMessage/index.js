module.exports = async function (context, req) {
  const date = "2023-05-07T22:07:45.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

